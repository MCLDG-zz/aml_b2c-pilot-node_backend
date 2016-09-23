kubectl create -f secret-b2c-pilot-node-mysql.yaml 
kubectl create -f secret-b2c-pilot-node-redis.yaml
kubectl create -f configmap-b2c-pilot-node-mysql.yaml
kubectl create -f configmap-b2c-pilot-node-redis.yaml
kubectl create -f svc-b2c-pilot-node-backend.yaml
kubectl create -f depl-b2c-pilot-node-backend.yaml
