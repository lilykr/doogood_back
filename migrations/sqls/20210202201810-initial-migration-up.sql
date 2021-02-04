/* Replace with your SQL commands */
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema doogood
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema doogood
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `doogood` DEFAULT CHARACTER SET utf8 ;
USE `doogood` ;

-- -----------------------------------------------------
-- Table `doogood`.`charity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `doogood`.`charity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `adress` VARCHAR(200) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telephone` INT NULL,
  `image` VARCHAR(500) NULL,
  `description` VARCHAR(2000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `doogood`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `doogood`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `doogood`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `doogood`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `description` VARCHAR(2000) NOT NULL,
  `adress` VARCHAR(200) NULL,
  `duration` VARCHAR(45) NULL,
  `charity_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_event_charity1_idx` (`charity_id` ASC) ,
  CONSTRAINT `fk_event_charity1`
    FOREIGN KEY (`charity_id`)
    REFERENCES `doogood`.`charity` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `doogood`.`charity_has_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `doogood`.`charity_has_category` (
  `charity_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`charity_id`, `category_id`),
  INDEX `fk_charity_has_category_category1_idx` (`category_id` ASC) ,
  INDEX `fk_charity_has_category_charity_idx` (`charity_id` ASC) ,
  CONSTRAINT `fk_charity_has_category_charity`
    FOREIGN KEY (`charity_id`)
    REFERENCES `doogood`.`charity` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_charity_has_category_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `doogood`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
