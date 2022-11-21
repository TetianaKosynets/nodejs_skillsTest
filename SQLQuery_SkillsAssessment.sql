CREATE TABLE Brokers(
Id INT NOT NULL PRIMARY KEY,
Name VARCHAR(50)
)

CREATE TABLE Customers(
Id INT NOT NULL PRIMARY KEY,
Name VARCHAR(50),
Amount INT,
BrokerId INT FOREIGN KEY REFERENCES Brokers(Id)
)

SELECT Brokers.Name, 
  COUNT(*) AS "count"
FROM Brokers
INNER JOIN Customers ON Customers.BrokerId=Brokers.Id
GROUP BY
  Brokers.Name, Customers.BrokerId
ORDER BY
 count DESC, Brokers.Name
