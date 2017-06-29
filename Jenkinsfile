pipeline {
    agent any
    environment { 
        FLYNN_APP = 'iguana'
    }
    stages {
        stage('Build') {
            steps {
                sh '''set -x
                    flynn create --remote \'\' $FLYNN_APP || true
                    docker build -t flynn-$FLYNN_APP .
                '''
            }
        }
        stage('Deploy') {
            when {
                expression {
                    currentBuild.result == null || currentBuild.result == 'SUCCESS' 
                }
            }
            steps {
                sh '''set -x
                    flynn -a $FLYNN_APP docker push flynn-$FLYNN_APP
                    flynn -a $FLYNN_APP route add http iguana.app.alecgorge.com || true
                    flynn -a $FLYNN_APP scale app=1
                '''

                retry(3) {
                    sh '''set -x
                    sleep 5
                    curl -f "http://iguana.aberforth.alecgorge.com/api-docs"
                    '''
                }
            }
        }
    }
}
