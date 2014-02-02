# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.6.10)
# Database: lotusod
# Generation Time: 2014-02-02 18:21:35 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Artists
# ------------------------------------------------------------

CREATE TABLE `Artists` (
  `name` varchar(255) DEFAULT NULL,
  `archive_collection` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `from_archive` tinyint(1) DEFAULT NULL,
  `musicbrainz_id` varchar(255) DEFAULT NULL,
  `extended_features` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  UNIQUE KEY `musicbrainz_id` (`musicbrainz_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Setlists
# ------------------------------------------------------------

CREATE TABLE `Setlists` (
  `setlistfm_setlist_id` varchar(255) DEFAULT NULL,
  `setlistfm_version_id` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `display_date` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `SetlistVenueId` int(11) DEFAULT NULL,
  `ArtistId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `setlistfm_setlist_id` (`setlistfm_setlist_id`),
  UNIQUE KEY `setlistfm_version_id` (`setlistfm_version_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table SetlistSets
# ------------------------------------------------------------

CREATE TABLE `SetlistSets` (
  `set_index` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `SetlistId` int(11) DEFAULT NULL,
  `is_encore` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table SetlistTracks
# ------------------------------------------------------------

CREATE TABLE `SetlistTracks` (
  `track_position` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `is_normal_seque` tinyint(1) DEFAULT NULL,
  `is_true_seque` tinyint(1) DEFAULT NULL,
  `is_prev_normal_seque` tinyint(1) DEFAULT NULL,
  `is_prev_true_seque` tinyint(1) DEFAULT NULL,
  `info` text,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `SetlistSetId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table SetlistVenues
# ------------------------------------------------------------

CREATE TABLE `SetlistVenues` (
  `setlistfm_venue_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `city_name` varchar(255) DEFAULT NULL,
  `city_state` varchar(255) DEFAULT NULL,
  `city_state_code` varchar(255) DEFAULT NULL,
  `city_lat` float(10,6) DEFAULT NULL,
  `city_long` float(10,6) DEFAULT NULL,
  `country_code` varchar(255) DEFAULT NULL,
  `country_name` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `setlistfm_venue_id` (`setlistfm_venue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Shows
# ------------------------------------------------------------

CREATE TABLE `Shows` (
  `title` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `display_date` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `source` text,
  `lineage` text,
  `taper` text,
  `description` text,
  `archive_identifier` varchar(255) DEFAULT NULL,
  `reviews` mediumtext,
  `reviews_count` int(11) DEFAULT NULL,
  `average_rating` float DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `VenueId` int(11) DEFAULT NULL,
  `ArtistId` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `track_count` int(11) DEFAULT NULL,
  `is_soundboard` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `archive_identifier` (`archive_identifier`),
  KEY `VenueId` (`VenueId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Tracks
# ------------------------------------------------------------

CREATE TABLE `Tracks` (
  `title` varchar(255) DEFAULT NULL,
  `md5` varchar(255) DEFAULT NULL,
  `track` int(11) DEFAULT NULL,
  `bitrate` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `file` text,
  `slug` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ShowId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Venues
# ------------------------------------------------------------

CREATE TABLE `Venues` (
  `name` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Years
# ------------------------------------------------------------

CREATE TABLE `Years` (
  `year` int(11) DEFAULT NULL,
  `show_count` int(11) DEFAULT NULL,
  `recording_count` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `avg_duration` float DEFAULT NULL,
  `avg_rating` float DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ArtistId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
