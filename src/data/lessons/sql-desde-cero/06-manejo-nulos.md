# 👻 El Misterio del Dato Nulo (NULL)

En el mundo de las Bases de Datos, `NULL` no es igual a cero (`0`) y **tampoco equivale a un texto vacío (`''`)**.

> ⚠️ **NULL significa: Información Ausente, Desconocida o "Missing in Action" (MIA).**

Imagina que un jugador nuevo entra a tu juego pero decide saltarse el tutorial y no elige ninguna "Nacionalidad" para su perfil. En la base de datos, ese campo no dirá "Ninguna"... simplemente quedará en `NULL`. La base de datos asume que "todavía no lo sabemos".

## ❌ El gran error de los novatos (Noobs)

Supongamos que quieres bannear o ver a todos los jugadores que no han verificado su número de teléfono.

**ERROR (No va a funcionar):**
```sql
SELECT GamerTag 
FROM Cuentas 
WHERE Telefono = NULL;  -- ❌ ¡MAL!
```
Esto fallará 100%. Es imposible comprobar si algo es "igual" a lo desconocido. Es como preguntar si un fantasma mide 1.70m. 

**LA FORMA CORRECTA:**
Para los fantasmas, usamos operadores verbales: `IS NULL` o `IS NOT NULL`.

```sql
-- Queremos a los que NO tienen teléfono cargado (Los sospechosos)
SELECT GamerTag 
FROM Cuentas 
WHERE Telefono IS NULL;

-- Queremos a los jugadores verificados (Los que SÍ dejaron su número)
SELECT GamerTag, Telefono 
FROM Cuentas 
WHERE Telefono IS NOT NULL;
```

## 🛡️ Salvando partidas: COALESCE (El ítem de repuesto)

Imagina que al final de la temporada sumas los "Puntos de Liga (LP)" de tus jugadores con los puntos "Bonus_Fidelidad". Pero algunos jugadores nuevos tienen ese bonus en `NULL` (porque no califican aún).

Sumar matemáticamente un número (`1000 LP`) más un `NULL`... ¡Provoca que el resultado final sea `NULL`! Le borrarías los puntos a tu jugador.

Para salvar el día usamos la función mágica `COALESCE()`. Su trabajo es: "Devuélveme el valor original, pero si está vacío (NULL), entonces equipa esta **Skins por defecto** o este número de repuesto que te doy".

```sql
-- Si el campo Bonus es nulo, SQL pondrá un 0 imaginario para que la suma funcione.
SELECT 
    GamerTag, 
    Puntos_Liga + COALESCE(Bonus_Fidelidad, 0) AS Puntos_Totales 
FROM Tabla_Puntuacion;
```

¡`COALESCE` es la carta trampa que más usarás en reportes financieros y de métricas!
