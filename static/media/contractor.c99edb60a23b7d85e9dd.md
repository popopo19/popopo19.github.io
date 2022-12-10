# Drone Programming Contractor

![Drone](https://raw.githubusercontent.com/popopo19/popopo19.github.io/master/src/data/images/drone_contractor.jpg)

In the spring of 2021, I got connected with  TLC Precision, a millimeter-wave product company, to work on a project they had been thinking about. The project was producing a drone that can identify drones in the air and detain them. My task was to create a demo of this project. This involved programming a drone with a net attached to the drone in order to capture the target drone. I worked with another student on this project.

## The structure of the drone

I was in charge of the programming, while my partner was in charge of assembling the drone. The drone was a standard quadcopter hobbyist drone with a Raspbeery Pi and the Pixhawk 4 flight controller onboard. ROS was the environment that I used to program the drone since ROS already had community packages that allows communication with the Pixhawk 4 flight controllers, such as the mavros library. It uses Mavlink to communicate with the flight controller. Using this library, I was able to program the drone to arm and flight to certain positions. I also used Gazebo, a simulation software, for testing my code.

I definitely didn't know enough for the job. I only got connected with TLC Precision because I was the coding lead of the engineering team at the time and had some experience with simulating a drone on Gazebo. Before TLC called me, I had just recently taught myself how to simulate a drone and fly it in the Gazebo. And so, there's was a lot of problems I didn't forsee and couldn't solve.

## How it went...

"Anything that can go wrong, will go wrong." This is quite the pessimistic line, but I think it applied to my situation. When programming the drone, I didn't think about the safety of the drone's surround nor the drone's. There were many times where the drone got heavily damaged. One time, the drone just flew away, and I spent 8 hours looking for it. Great times... lol. Once I realized how dangerous the drone can get, I placed precautions onto the drone. One protocol that I developed was for the drone to land if it flew to far from its starting position. A lot of money could've have been used on other stuff if I placed precautions beforehand. I guess I didn't really understand how different the real world is from simulation.

Detecting the target drone was difficult. I didn't know anything about object detection, and so I had to cheat. I taped a fiducial marker on the target drone so that I didn't need to use object detection at all. You can think of a fiducial marker as a QR code. It's easier to find QR codes than a drone, so I just needed the main drone to find the marker. I was able to use some built-in functions of the OpenCV library to detect these fiducial markers but drones can be very fast. The drone we were using was also very unstable when it was flying, so that made it hard for the Pi to accurately detect the fiducial marker. Eventually, we discarded this part of the project and just planned on making the drone go in a specific position where we'll have the target drone at.

Out of all of the problems that I had, there was one that just confused me. Sometimes the drone's position gradually changed without the program telling it to. This was catastrophic. My program would tell the drone to go to an z value of 1 (drone flights up). However, sometimes, the drone's z positioning would decrease, and this causes the drone to go up higher since it was no longer at a z value of 1. I was really baffled by this issue, because this problem would happen only sometimes, then it would disappear. I concluded that it wasn't my code because of how random the problem occurred and how the data I got from the flight controller suggested that the z value would change without the drone actually changing in height. The problem likely came from the inaccuracy of the sensors on the drone. We tried a couple of fixes. One was to use optical flow to track the drones positioning instead. But that didn't really change the outcome. We tried using lidar to measure the height of the drone instead but that didn't work. I was never able to solve this issue but demo day came and it was a distaster.

Long story short, the drone crashed. During this time, I had begun working as an undergraduate researcher and told TLC that I had to leave the project because the research. Honestly, part of me wanted to give up. So, that's pretty what I did. TLC was able to find an old upperclassman of mine, and I passed my work to him. 

## Giving up

I'm glad I was only 19 when this happened. I think the consequences would be a lot worse if I had this contract now. Even so, I still don't feel good about this project. I don't really like talking about it (I guess no one really likes talking about their failures). Even writing this is hard. Probably not the best thing to put on a portfolio. I'm really only writing about it to write about the stuff that I learn, and I learned a lot.

I learned how to professionally communicate with a company. But, I also learn that most professional workplaces aren't as formal as I had originally thought. People are much more chill than I had expected, and this was nice to learn. It definitely made me feel like I didn't have to type messges starting with "Dear Blahblahblah." 

I also learned a lot about how to program a robot/drone. As stressful as it was, it was fun. I enjoyed working on the drone and figuring things out.