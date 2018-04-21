#! /bin/sh
newConfig="$(cat config.json)"
ssh $1 << EOF
  touch $2
  echo '$newConfig' > $2
EOF
