kubectl delete -f deployment-b2c-pilot-node-backend.yaml
kubectl delete -f svc-b2c-pilot-node-backend.yaml
kubectl delete -f secret-b2c-pilot-node-mysql.yaml 
kubectl delete -f secret-b2c-pilot-node-redis.yaml
kubectl delete -f configmap-b2c-pilot-node-mysql.yaml
kubectl delete -f configmap-b2c-pilot-node-redis.yaml
