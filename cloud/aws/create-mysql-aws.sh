aws rds create-db-instance --db-instance-identifier aml-b2c-pilot-node-backend-mysql --db-name b2cpilotnode \
--allocated-storage 10 --db-instance-class db.t2.small --engine mysql \
--master-username cxuser --master-user-password p4ssw0rd12! --engine-version=5.7.11

echo 'After creating the DB, check the associated security group and make sure it opens TCP to source Anywhere  0.0.0.0'
