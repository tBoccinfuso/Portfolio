alter procedure custDetails
	@ID bigint,
	@NAME varchar(61) output,
	@ADD varchar(70) output
AS

SELECT	@NAME = CONCAT([CustomerFirstName], ISNULL(' ' + CustomerMI + '.',''), [CustomerLastName]),
		@ADD = CONCAT([CustomerAddress], ' ', [CustomerCity], ' ', [StateAbbreviation], ' ', [CustomerZipCode])
FROM	[SportCustomer]
WHERE	[CustomerID] = @ID;



GO