pipeline {
    agent any
    environment { 
        APP_NAME = 'iguana'
        DOKKU_HOST = 'dumbledore.alecgorge.com'
    }
    stages {
        stage('Build and Deploy') {
            steps {
                sh """set -x
                    git remote add dokku dokku@${env.DOKKU_HOST}:${env.APP_NAME} || true
                    git push dokku \$(git rev-parse HEAD):refs/heads/master
                """

                retry(3) {
                    sh """set -x
                    sleep 5
                    curl -f "http://iguana.dumbledore.alecgorge.com/api/artists"
                    """
                }
            }
        }
    }
}
