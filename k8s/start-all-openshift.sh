oc create -f secret-b2c-pilot-node-mysql.yaml 
oc create -f secret-b2c-pilot-node-redis.yaml
oc create -f configmap-b2c-pilot-node-mysql.yaml
oc create -f configmap-b2c-pilot-node-redis.yaml
oc create -f svc-b2c-pilot-node-backend.yaml
oc create -f dc-b2c-pilot-node-backend-openshift.yaml
