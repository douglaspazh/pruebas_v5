SELECT d.Nombre AS Departamento, COUNT(e.Id) AS NumeroEmpleados
FROM Empleados e
JOIN Departamentos d ON e.DepartamentoId = d.id
GROUP BY d.Nombre
HAVING COUNT(e.Id) >= 3