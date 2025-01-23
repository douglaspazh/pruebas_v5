SELECT e.Nombre AS Colaborador, d.Nombre AS Departamento
FROM Empleados e
JOIN Departamentos d ON e.DepartamentoId = d.id
ORDER BY CASE WHEN d.Nombre = 'Mercadeo' THEN 0 ELSE 1 END, d.Nombre, e.Nombre
