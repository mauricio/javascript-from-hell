function myAction(result) {
  console.log("result is " + result);
}

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }

  client.query("BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ", function(err, result) {

    if(err) {
      return console.error('error running query', err);
    }

    client.query("SELECT 0", function(err, result) {

      if(err) {
        return console.error('error running query', err);
      }

      client.query("COMMIT", function(err, result) {

        if(err) {
          return console.error('error running query', err);
        }

        myAction(result);

      });

    });

});
