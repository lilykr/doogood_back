/* Replace with your SQL commands */
-- -----------------------------------------------------
-- Table `doogood`.`event_has_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `doogood`.`event_has_category` (
  `event_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`event_id`, `category_id`),
  INDEX `fk_event_has_category_category1_idx` (`category_id` ASC),
  INDEX `fk_event_has_category_event1_idx` (`event_id` ASC),
  CONSTRAINT `fk_event_has_category_event1`
    FOREIGN KEY (`event_id`)
    REFERENCES `doogood`.`event` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_event_has_category_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `doogood`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

ALTER TABLE `event`
ADD `charity_name` varchar(100) NOT NULL;

ALTER TABLE `event`
ADD `category` varchar(50) NOT NULL;