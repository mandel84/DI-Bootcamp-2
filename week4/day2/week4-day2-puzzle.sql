  SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- 	The output will be 0 because NULL in the subquery makes the NOT IN condition always unknown.
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5
-- The output will be 3 because id 5 is excluded, leaving 6, 7, and NULL.
					SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab)
-- The output will be 0 because NULL in the subquery makes the NOT IN condition always unknown.
					SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL)
-- The output will be 3 because id 5 is excluded, leaving 6, 7, and NULL.











