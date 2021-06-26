exports.handler = async function(event, context) {
  const { identity, user } = context.clientContext;

  console.log('test output')
  console.log('identity', identity)
  console.log('user', user)
  return {
    statusCode: 200,
    body: JSON.stringify({
      "app_metadata": { roles: ["member"]}
    })
  }
}