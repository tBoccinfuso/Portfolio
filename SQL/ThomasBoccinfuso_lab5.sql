-- THOMAS BOCCINFUSO
-- LAB # 5


-- PART A: DDL (& INSERTS - use other file)
-- Put your CREATE STATEMENTS HERE (2 create statements, 5 marks each)
create table person
(
	persID			INT IDENTITY (1,1),
	persFName		VARCHAR(30) NOT NULL,
	persLName		VARCHAR(30) NOT NULL,
	persDOB			DATE	NOT NULL,
	motherID		INT,
	fatherID		INT,
	persDOD			DATE,
	persGender		CHAR(1)

	constraint pk_person_persID PRIMARY KEY (persID)
);

create table couple
(

	coupleID		INT IDENTITY (1,1),
	alphaSpouse		INT NOT NULL,
	omegaSpouse		INT NOT NULL, 
	coupleStart		DATE NOT NULL, 
	coupleEnd		DATE,
	persID			INT

	constraint pk_couple_coupleID PRIMARY KEY (coupleID),
	constraint fk_person_couple FOREIGN KEY (persID)
		REFERENCES person(persID)
);


-- PART B: Practice SELECT queries.
-- 1. Show all of the details about fathers ( /4)
select distinct 
person.*
from person
join person AS father on father.fatherID = person.persID
			

-- 2. Show all of the details about men who are/were not fathers ( /5)

select 
*
from person as father
where not exists (select * from person where person.fatherid = father.persid)
AND persGender = 'm'


-- 3. Output each father and mother and all of their children
--    Order the output by mother last and first name, then by child DOB ( /5)

select 
CONCAT (father.persfname, + ' ', + father.persLName) as 'Father',
CONCAT (mother.persfname, + ' ', + mother.persLName) as 'Mother',
CONCAT (child.persfname, + ' ', + child.persLName) as 'Child'
from person as child
join person as father on child.fatherID = father.persID
join person as mother on child.motherID = mother.persID
order by mother.persLName, mother.persFName, child.persDOB


-- 4. Display the name and age of couples in which both spouses are now deceased ( /6)
select
concat (ALPHA.persFName, + ' ', + ALPHA.perslname) AS 'ALPHA',
DATEDIFF (year, ALPHA.persDOb, ALPHA.persDOd) AS 'Age',
concat (OMEGA.persFName, + ' ', + OMEGA.perslname) AS 'OMEGA',
DATEDIFF (year, OMEGA.persDOb, OMEGA.persDOd) AS 'Age'
from person as ALPHA
join couple on ALPHA.persID = couple.alphaSpouse
join person as OMEGA on couple.omegaSpouse = OMEGA.persID
where ALPHA.persDOD is not null and OMEGA.persDOD is not null


-- 5. Which alpha spouses have been in more than one relationship? ( /5)

select
CONCAT (ALPHA.persfname, + ' ', + ALPHA.persLName) as 'ALPHA',
count(couple.alphaSpouse) AS ' Number of Relationships'
from person as ALPHA
join couple on ALPHA.persID = couple.alphaSpouse
join person as OMEGA on couple.omegaSpouse = OMEGA.persID
group by couple.alphaSpouse,ALPHA.persfname,ALPHA.persLName
having count(couple.alphaSpouse) > 1
order by couple.alphaSpouse DESC