
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
  docker run -d -p 8080:80 --name my_container my_image
  ```
- **Flags**:
  - `-d, --detach`: Run container in background and print container ID
  - `-p, --publish`: Maps a host port to a container port
  - `--name`: Assigns a name to the container

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
- **Usage**: Runs a command in a running container
- **Example**:
  ```bash
  docker exec -it my_container bash
  ```
- **Flags**:
  - `-i, --interactive`: Keep STDIN open even if not attached
  - `-t, --tty`: Allocate a pseudo-TTY

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

### Remove a Network (`docker network rm`)
- **Usage**: Removes a network
- **Example**:
  ```bash
  docker network rm my_network
```