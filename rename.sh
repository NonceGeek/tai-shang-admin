#!/bin/bash

set -e

CURRENT_NAME="Whitelist"
NEW_NAME="Whitelist"

ack --noshell -l $CURRENT_NAME | xargs sed -i '' -e "s/$CURRENT_NAME/$NEW_NAME/g"
