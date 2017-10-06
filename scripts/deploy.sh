if [[ -z $ADMIN_TOKEN ]]; then
  echo "Expose the ADMIN_TOKEN"
  exit 1
fi

now \
  -d
  -a okgrow-coursebook-server.now.sh \
  -e GITHUB_CLIENT_ID=@learnnextjs-gh-client-id \
  -e GITHUB_CLIENT_SECRET=@learnnextjs-gh-client-secret \
  -e ROOT_URL="https://okgrow-coursebook-server.now.sh" \
  -e MONGO_URL=@learnnextjs-mongo-url \
  -e ADMIN_TOKEN=$ADMIN_TOKEN
