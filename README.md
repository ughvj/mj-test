- `docker image build -t imj .`
- `docker container run -it --name mj -v $(pwd):/usr/src -d imj`
- `node --experimental-modules --es-module-specifier-resolution=node src/index.js`