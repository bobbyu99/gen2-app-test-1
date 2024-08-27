/* eslint-disable */
/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import { a } from "@aws-amplify/data-schema";
import { configure } from "@aws-amplify/data-schema/internals";
import { secret } from "@aws-amplify/backend";

export const schema = configure({
    database: {
        identifier: "IDqXLEwDjqFIYdLrcsjdR4eQ",
        engine: "mysql",
        connectionUri: secret("SQL_CONNECTION_STRING"),
        vpcConfig: {
            vpcId: "vpc-061cf45b1bef08714",
            securityGroupIds: [
                "sg-0d9d458fe2a9d4d37"
            ],
            subnetAvailabilityZones: [
                {
                    subnetId: "subnet-0ebd68b58f5096dc1",
                    availabilityZone: "us-west-2a"
                },
                {
                    subnetId: "subnet-0e84eb8e27b1dc97f",
                    availabilityZone: "us-west-2d"
                },
                {
                    subnetId: "subnet-0d71a10fd662b1c55",
                    availabilityZone: "us-west-2c"
                },
                {
                    subnetId: "subnet-03cabd5623d4bf015",
                    availabilityZone: "us-west-2b"
                }
            ]
        }
    }
}).schema({
    "foo": a.model({
        id: a.string().required(),
        description: a.string()
    }).identifier([
        "id"
    ])
});
