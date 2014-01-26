
Sequelize 		= require('sequelize-mysql').sequelize
sequelize 		= require('../data/db').seq
mysql 	 		= require('sequelize-mysql').mysql

Show = sequelize.define 'Show',
	title				: Sequelize.STRING
	date 				: Sequelize.DATE
	display_date		: Sequelize.STRING
	year 				: Sequelize.INTEGER
	source 				: 'MEDIUMTEXT' # Sequelize.TEXT
	lineage 			: Sequelize.TEXT
	taper 				: Sequelize.TEXT
	description 		: Sequelize.TEXT
	archive_identifier	: type: Sequelize.STRING, unique: true
	reviews 			: Sequelize.TEXT
	reviews_count 		: Sequelize.INTEGER
	average_rating 		: Sequelize.FLOAT
	duration 			: Sequelize.INTEGER
	track_count 		: Sequelize.INTEGER
	is_soundboard 		: Sequelize.BOOLEAN

Venue = sequelize.define 'Venue',
	name	: Sequelize.STRING
	city 	: Sequelize.STRING

Track = sequelize.define 'Track',
	title 	: Sequelize.STRING
	md5 	: Sequelize.STRING
	track 	: Sequelize.INTEGER
	bitrate : Sequelize.INTEGER
	size 	: Sequelize.INTEGER
	length 	: Sequelize.INTEGER
	file 	: Sequelize.TEXT
	slug 	: Sequelize.STRING

Artist = sequelize.define 'Artist',
	name 				: Sequelize.STRING
	archive_collection 	: Sequelize.STRING
	slug 				: type: Sequelize.STRING, unique: true
	from_archive 		: Sequelize.BOOLEAN
	extended_features	: Sequelize.INTEGER

Year = sequelize.define 'Year',
	year 				: Sequelize.INTEGER
	show_count 			: Sequelize.INTEGER
	recording_count		: Sequelize.INTEGER
	duration 			: Sequelize.INTEGER
	avg_duration 		: Sequelize.FLOAT
	avg_rating 			: Sequelize.FLOAT

## IMPORTANT
## for performance, don't forget to add a non-unique index to VenueId
Show.belongsTo Venue

Show.belongsTo Artist
Venue.hasMany Show
Artist.hasMany Show

Track.belongsTo Show
Show.hasMany Track, joinTableName: 'show_has_tracks'

Year.belongsTo Artist
Artist.hasMany Year

module.exports = 
	Show: Show
	Venue: Venue
	Track: Track
	Artist: Artist
	Year: Year
	Sequelize: Sequelize
	sequelize: sequelize
	sync: (o) -> sequelize.sync(o)