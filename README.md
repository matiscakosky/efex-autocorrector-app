## Ejecutar con Docker

Se agregó un Dockerfile para levantar la app en `http://localhost:3000`

### Buildear el Dockerfile

```bash
docker build -t autocorrect-app .
```

### Ejecutar el contenedor

```bash
docker run -p 3000:80 autocorrect-app
```
