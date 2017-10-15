-- how many battles did each player win as the charOne in the battle?
-- (courseId # 5)

select studentUsername, charName, count (*) as 'battles won'
from GLADIATOR
join battle on GLADIATOR.charId = BATTLE.charOne
where courseId = 5 AND charOneScore > charTwoScore
group by studentUsername, charName
order by count (*) DESC;


-- how many battles did each player win as the charTwo in the battle?
-- (courseId # 5)

select studentUsername, charName, count (*) as 'battles won'
from GLADIATOR
join battle on GLADIATOR.charId = BATTLE.chartwo
where courseId = 5 AND charTwoScore > charOneScore
group by studentUsername, charName
order by count (*) DESC;


-- how many battles did each player win as either charOne or charTwo in the battle?
-- (courseId # 5)

select studentUsername, charName, count (*) as 'battles won'
from GLADIATOR
join battle on (GLADIATOR.charId = BATTLE.chartwo AND charTwoScore > charOneScore) OR (GLADIATOR.charId = BATTLE.charOne AND charOneScore > charTwoScore)
where courseId = 5 
group by studentUsername, charName
order by count (*) DESC;


-- which items in our database can we "craft" using a recipe?
-- no repeat rows (Hint: do not use group by)
select distinct itemName
from item
join RECIPE on item.itemID = RECIPE.itemID


-- what and how much of it do I need to make a triforce?
select item.itemName, ingredient.itemName, RECIPE.ingredientQty
from item
join RECIPE on item.itemID = RECIPE.itemID
join ITEM as ingredient on ingredient.itemID = RECIPE.ingredientID
where item.itemName = 'Triforce'


-- what is the total quantity of items it takes to make an apple pie?
select item.itemName, sum(ingredientQty) as 'total quantity'
from ITEM
join RECIPE on item.itemID = RECIPE.itemID
where item.itemName = 'Apple Pie'
group by item.itemName
