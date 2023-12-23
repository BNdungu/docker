# Using Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. It uses a YAML file to configure the application's services and streamlines the process of managing these services as a single unit.

## Installation

### Using Snap (For Docker)
```bash
sudo snap install docker
```

### Using APT (For Docker Compose)
```bash
sudo apt install docker-compose
```

## Docker Compose Workflow

### Create a `docker-compose.yml` File

- Create a `docker-compose.yml` file in your project directory.
- Define the services, networks, volumes, and other configurations for your application within this YAML file.

### Configuration Syntax

```yaml
version: '3'
services:
  service1:
    image: image1
    ports:
      - "8000:8000"
    volumes:
      - /path/on/host:/path/in/container
  service2:
    image: image2
    environment:
      - KEY=VALUE
```

### Basic Commands

- **Start Containers in the Background:**
  ```bash
  docker-compose up -d
  ```

- **View Logs for Services:**
  ```bash
  docker-compose logs
  ```

- **Stop Containers:**
  ```bash
  docker-compose down
  ```

- **Rebuild Services:**
  ```bash
  docker-compose up -d --build
  ```

### Additional Commands

- **Scale Services:**
  ```bash
  docker-compose up -d --scale service1=3
  ```

- **Execute a Command in a Service:**
  ```bash
  docker-compose exec service1 bash
  ```

- **View Docker Compose Configuration:**
  ```bash
  docker-compose config
  ```

### Compose File Reference

The [Compose file reference](https://docs.docker.com/compose/compose-file/) provides detailed information on all available options and configurations for the `docker-compose.yml` file.

## Use Cases

- **Development Environments:** Define complex development environments with multiple interconnected services.
- **Testing Environments:** Easily set up and tear down test environments with specific configurations.
- **Production Deployment:** Streamline deployment processes by defining services, networks, and configurations in a single file.

