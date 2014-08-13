
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
	transferer 				: Sequelize.TEXT
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
	slug 	: Sequelize.STRING

Track = sequelize.define 'Track',
	title 	: Sequelize.STRING
	md5 	: Sequelize.STRING
	track 	: Sequelize.INTEGER
	bitrate : Sequelize.INTEGER
	size 	: Sequelize.INTEGER
	length 	: Sequelize.INTEGER
	file 	: Sequelize.TEXT
	#ogg_file : Sequelize.TEXT
	slug 	: Sequelize.STRING

Artist = sequelize.define 'Artist',
	name 				: Sequelize.STRING
	archive_collection 	: Sequelize.STRING
	slug 				: type: Sequelize.STRING, unique: true
	from_archive 		: Sequelize.BOOLEAN
	musicbrainz_id		: type: Sequelize.STRING, unique: true
	extended_features	: Sequelize.INTEGER

Artist.features =
	SETLIST_FM 			: 1 << 0
	SETLIST_CHARTS		: 1 << 1

Year = sequelize.define 'Year',
	year 				: Sequelize.INTEGER
	show_count 			: Sequelize.INTEGER
	recording_count		: Sequelize.INTEGER
	duration 			: Sequelize.INTEGER
	avg_duration 		: Sequelize.FLOAT
	avg_rating 			: Sequelize.FLOAT

Setlist = sequelize.define 'Setlist',
	setlistfm_setlist_id 	: type: Sequelize.STRING, unique: true
	setlistfm_version_id 	: type: Sequelize.STRING, unique: true
	date 					: Sequelize.DATE
	display_date			: Sequelize.STRING

SetlistSet = sequelize.define 'SetlistSet',
	set_index			: Sequelize.INTEGER
	title 				: Sequelize.STRING
	is_encore			: Sequelize.BOOLEAN

SetlistTrack = sequelize.define 'SetlistTrack',
	track_position			: Sequelize.INTEGER
	title					: Sequelize.STRING
	is_normal_seque 		: Sequelize.BOOLEAN
	is_true_seque			: Sequelize.BOOLEAN
	is_prev_normal_seque	: Sequelize.BOOLEAN
	is_prev_true_seque 		: Sequelize.BOOLEAN
	info 					: Sequelize.TEXT

SetlistVenue = sequelize.define 'SetlistVenue',
	setlistfm_venue_id 	: type: Sequelize.STRING, unique: true
	name 				: Sequelize.STRING
	city_name 			: Sequelize.STRING
	city_state 			: Sequelize.STRING
	city_state_code 	: Sequelize.STRING
	city_lat 			: Sequelize.FLOAT(10, 6)
	city_long 			: Sequelize.FLOAT(10, 6)
	country_code 		: Sequelize.STRING
	country_name 		: Sequelize.STRING

SetlistSet.belongsTo Setlist
Setlist.hasMany SetlistSet

Setlist.belongsTo Artist
Artist.hasMany Setlist

SetlistSet.hasMany SetlistTrack
SetlistTrack.belongsTo SetlistSet

Setlist.belongsTo SetlistVenue
SetlistVenue.hasMany Setlist

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
	Setlist: Setlist
	SetlistSet: SetlistSet
	SetlistTrack: SetlistTrack
	SetlistVenue: SetlistVenue
	Sequelize: Sequelize
	sequelize: sequelize
	sync: (o) -> sequelize.sync(o)