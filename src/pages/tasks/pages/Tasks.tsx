import useResize from "../hooks/useResize";
import "../Tasks.styles.css";
import { limitDescription } from "../utils/string/limitDescription";
const TasksPage = () => {
  const isPhone = useResize();
  return (
    <main id="tasks">
      <section className="wrapper_list">
        <div className="list_header">
          <h2>My Tasks</h2>
        </div>

        {isPhone ? (
          <div className="list phone">
            <div className="card">
              <div className="close">x</div>
              <h3>Task PHONE</h3>
              <h6>18/8/2022 15:20hs</h6>
              <h5>Jalinson Diaz</h5>
              <button type="button">New</button>
              <button type="button">High</button>
              <p>Fake Description</p>
            </div>
          </div>
        ) : (
          <div className="list_group">
            <div className="list">
              <h4>Done</h4>
              <div className="card">
                <div className="close">x</div>
                <h3>Task #1</h3>
                <h6>18/8/2022 15:20hs</h6>
                <h5>Jalinson Diaz</h5>
                <button type="button">New</button>
                <button type="button">High</button>
                <p>
                  {
                    limitDescription(`Destroy couch let me in let me out let me in let me out let me
                  in let me out who broke this door anyway thug cat . Find a way
                  to fit in tiny box. Cat is love, cat is life why can't i catch
                  that stupid red dot. Lick the other cats scratch so owner
                  bleeds. Check cat door for ambush 10 times before coming in
                  make meme, make cute face sleeps on my head. Get video posted
                  to internet for chasing red dot. Dont wait for the storm to
                  pass, dance in the rain put butt in owner's face meowing non
                  stop for food meow for food, then when human fills food dish,
                  take a few bites of food and continue meowing hide when guests
                  come over, so find empty spot in cupboard and sleep all day.
                  Destroy dog. Stare at ceiling light. Flex claws on the human's
                  belly and purr like a lawnmower poop on couch yet scratch yet
                  stretch. Mice skid on floor, crash into wall , or make it to
                  the carpet before i vomit mmmmmm mew mew or meowing non stop
                  for food run at 3am. Miaow then turn around and show you my
                  bum white cat sleeps on a black shirt. Play riveting piece on
                  synthesizer keyboard. Bite the neighbor's bratty kid love. Lie
                  in the sink all day nyaa nyaa or jump around on couch, meow
                  constantly until given food, no, you can't close the door, i
                  haven't decided whether or not i wanna go out claws in the eye
                  of the beholder yet love to play with owner's hair tie poop on
                  grasses. Where is my slave? I'm getting hungry drink water out
                  of the faucet catch small lizards, bring them into house, then
                  unable to find them on carpet but cough hairball on
                  conveniently placed pants. Mouse destroy couch as revenge
                  shred all toilet paper and spread around the house, or play
                  with twist ties hunt anything that moves, and annoy owner
                  until he gives you food say meow repeatedly until belly rubs,
                  feels good so enslave the hooman.`).string
                  }
                </p>
              </div>
            </div>
            <div className="list">
              <h4>Doing</h4>
              <div className="card">
                <div className="close">x</div>
                <h3>Task #1</h3>
                <h6>18/8/2022 15:20hs</h6>
                <h5>Jalinson Diaz</h5>
                <button type="button">New</button>
                <button type="button">High</button>
                <p>Fake Description</p>
              </div>
            </div>
            <div className="list">
              <h4>To Do</h4>
              <div className="card">
                <div className="close">x</div>
                <h3>Task #1</h3>
                <h6>18/8/2022 15:20hs</h6>
                <h5>Jalinson Diaz</h5>
                <button type="button">New</button>
                <button type="button">High</button>
                <p>Fake Description</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default TasksPage;
