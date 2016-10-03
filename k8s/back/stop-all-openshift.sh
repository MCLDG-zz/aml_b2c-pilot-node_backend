oc delete -f dc-b2c-pilot-node-backend-openshift.yaml
oc delete -f secret-b2c-pilot-node-mysql.yaml 
oc delete -f secret-b2c-pilot-node-redis.yaml
oc delete -f configmap-b2c-pilot-node-mysql.yaml
oc delete -f configmap-b2c-pilot-node-redis.yaml
oc delete -f svc-b2c-pilot-node-backend.yaml
