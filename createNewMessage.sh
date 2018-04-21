#! /bin/sh
newConfig="$(cat config.json)"
ssh $1 << EOF
  touch $2
  echo '$newConfig' > $2
EOF

# This is bad because it might not be a jpg but it's a hacky solution :(
# TODO: fix this somehow with imagemagick or something
scp $3 $1:"/var/www/html/positiveImage.jpg"
