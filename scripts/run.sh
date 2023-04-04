#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 [run or open]" 1>&2
  exit 1
fi

source ./.env
CYPRESS_DASHBOARD_URL=$TEST_DASHBOARD_URL \
CYPRESS_DASHBOARD_USER=$TEST_DASHBOARD_USER \
CYPRESS_DASHBOARD_PASSWORD=$TEST_DASHBOARD_PASSWORD \
 npx cypress $1
