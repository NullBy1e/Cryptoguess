# Backend

To build and run:

go build main.go

./main


API Routes:  
/version  
/resources/coins_today => Returns todays coins  
/resources/data/{Date?} => Returns previous data  
/results/upload => uploads result from user  


Database Solution:

I think the most suitable solution for this project would be a Redis Datebase acting as cache for a day,
after then it would write out to a csv file and archived for further use.

User -> Redis cache - ( After 24 h ) > csv file archive

Some would prefer writing to a relational database like postgresql, but I think this solution is highly scalable with minimal effort and maintenance