- `CMD-SHELL, curl -f http://localhost:8080/actuator/health || exit 1`
  ```json
  {
    "family": "products-api",
    "containerDefinitions": [
      {
        "name": "products-api",
        "image": "XXXXXXXXXXX.dkr.ecr.sa-east-1.amazonaws.com/products-api:latest",
        "cpu": 0,
        "portMappings": [
          {
            "name": "products-api-8080-tcp",
            "containerPort": 8080,
            "hostPort": 8080,
            "protocol": "tcp",
            "appProtocol": "http"
          }
        ],
        "essential": true,
        "environment": [],
        "environmentFiles": [],
        "mountPoints": [],
        "volumesFrom": [],
        "ulimits": [],
        "logConfiguration": {
          "logDriver": "awslogs",
          "options": {
            "awslogs-group": "/ecs/products-api",
            "mode": "non-blocking",
            "awslogs-create-group": "true",
            "max-buffer-size": "25m",
            "awslogs-region": "sa-east-1",
            "awslogs-stream-prefix": "ecs"
          },
          "secretOptions": []
        },
        "healthCheck": {
          "command": [
            "CMD-SHELL",
            "curl -f http://localhost:8080/actuator/health || exit 1"
          ],
          "interval": 30,
          "timeout": 5,
          "retries": 3
        },
        "systemControls": []
      }
    ],
    "taskRoleArn": "arn:aws:iam::XXXXXXXXXXX:role/ecsTaskExecutionRole",
    "executionRoleArn": "arn:aws:iam::XXXXXXXXXXX:role/ecsTaskExecutionRole",
    "networkMode": "awsvpc",
    "volumes": [],
    "placementConstraints": [],
    "requiresCompatibilities": ["FARGATE"],
    "cpu": "256",
    "memory": "512",
    "runtimePlatform": {
      "cpuArchitecture": "X86_64",
      "operatingSystemFamily": "LINUX"
    }
  }
  ```
