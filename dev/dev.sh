#!/bin/bash
echo "corriendo en el puerto 4200"
docker run --rm -ti --name prototype -v $(pwd)/src:/src -p 4200:4200 desarrollo-ui
