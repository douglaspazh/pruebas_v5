SELECT e.Nombre AS Colaborador, DATEDIFF(MONTH, e.FechaIngreso, GETDATE()) AS Meses
FROM Empleados e
WHERE DATEDIFF(MONTH, e.FechaIngreso, GETDATE()) >= 12
