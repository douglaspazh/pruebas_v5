SELECT d.Nombre AS Departamento, MIN(e.Salario) AS Minimo, MAX(e.Salario) AS Maximo, ROUND(AVG(e.Salario), 2) AS Promedio
FROM Empleados e
JOIN Departamentos d ON e.DepartamentoId = d.id
GROUP BY d.Nombre
