
# Docker Commands and Flags

## Image Management

### Build an Image (`docker build`)
- **Usage**: Builds an image from a Dockerfile
- **Example**: 
  ```bash
  docker build -t my_image .
  ```
- **Flags**:
  - `-t, --tag`: Assigns a tag/label to the image
  - `.`: Specifies the build context (current directory)

### List Images (`docker images`)
- **Usage**: Lists all images
- **Example**:
  ```bash
  docker images
  ```

### Remove Image (`docker rmi`)
- **Usage**: Removes an image
- **Example**:
  ```bash
  docker rmi my_image
  ```
- **Flags**:
  - `-f, --force`: Force removal of the image

## Container Management

### Run a Container (`docker run`)
- **Usage**: Runs a command in a new container
- **Example**:
  ```bash
  docker run -d -v $(pwd):/app:ro -v /app/node_modules --env-file ./.env -p 8080:80 --name my_container my_image
  ```
- **Flags**:
  - `-d, --detach`: Run container in background and print container ID
  - `-v, --volume`: Allow your code changes to reflect in the container without requiring a rebuild.
  - `-p, --publish`: Maps a host port to a container port
  - `--env` : Environmant variable
  - `--name`: Assigns a name to the container

- **Fields**:
  - `-v /app/node_modules`: Sync content in the local directory to that in the image with an exception of node_modules. 
  - `-v $(pwd):/app:ro`: Make the docker conatiner read only and thus change in content is unidirectional.
  - `--env-file ./.env` : Specifies an environment file (.env) for setting container environment variables.

### List Containers (`docker ps`)
- **Usage**: Lists running containers
- **Example**:
  ```bash
  docker ps
  ```
- **Flags**:
  - `-a, --all`: Lists all containers (running and stopped)

### Stop Container (`docker stop`)
- **Usage**: Stops a running container
- **Example**:
  ```bash
  docker stop my_container
  ```

### Show Logs (`docker logs `)
- **Usage**: Show log outputs from a running service in a container
- **Example**:
  ```bash
  docker logs my_container -f
  ```
- **Flags**:
  - `    --details`:        Show extra details provided to logs
  - `-f, --follow`:        Follow log output
  - `    --since string`:   Show logs since timestamp (e.g. "2013-01-02T13:23:37Z") or relative (e.g. "42m" for 42 minutes)
  - `-n, --tail string`:    Number of lines to show from the end of the logs (default "all")
  - `-t, --timestamps`:     Show timestamps
  - `    --until string`:   Show logs before a timestamp (e.g. "2013-01-02T13:23:37Z") or relative (e.g. "42m" for 42 minutes)

### Remove Container (`docker rm`)
- **Usage**: Removes a container
- **Example**:
  ```bash
  docker rm my_container
  ```
- **Flags**:
  - `-f, --force`: Force removal of the container

### Inspect Container (`docker inspect`)
- **Usage**: Displays detailed information about a container
- **Example**:
  ```bash
  docker inspect my_container
  ```

### Execute Command in a Running Container (`docker exec`)
- **Usage**: Runs a command in a running container (Login into your docker container)
- **Example**:
  ```bash
  docker exec -it my_container bash
  ```
- **Flags**:
  - `-i, --interactive`: Keep STDIN open even if not attached
  - `-t, --tty`: Allocate a pseudo-TTY

## Volume Management

### List all volumes(`docker volume ls`)
- **Usage**: Lists all volumes created in docker containers
- **Example**: 
  ```bash
  docker volume ls
  ```

### Delete a volume (`docker volume rm`)
- **Usage**: Delete specified volumes in docker
- **Example**: 
  ```bash
  docker volume rm my-volume
  ```

### Delete volumes (`docker volume prune`)
- **Usage**: Remove all unecessary volumes
- **Example**: 
  ```bash
  docker volume prune
  ```

## Network Management

### List Networks (`docker network ls`)
- **Usage**: Lists all networks
- **Example**:
  ```bash
  docker network ls
  ```

### Create a Network (`docker network create`)
- **Usage**: Creates a network
- **Example**:
  ```bash
  docker network create my_network
  ```

### Inspect a Network (`docker network inspect`)
- **Usage**: Show network details to a network of containers
- **Example**:
  ```bash
  docker network inspect my_network
  ```

### Remove a Network (`docker network rm`)
- **Usage**: Removes a network
- **Example**:
  ```bash
  docker network rm my_network
``` 
