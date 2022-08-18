import Card from "../components/Card";
import Form from "../components/form/Form";
import useResize from "../hooks/useResize";
import { cardsData } from "../misc/data";
import "../Tasks.styles.css";
const TasksPage = () => {
  const { isPhone } = useResize();
  return (
    <main id="tasks">
      <Form />
      <section className="wrapper_list">
        <div className="list_header">
          <h2>My Tasks</h2>
        </div>

        {isPhone ? (
          <div className="list phone">
            {cardsData.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        ) : (
          <div className="list_group">
            <div className="list">
              <h4>Done</h4>
              {cardsData.map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </div>
            <div className="list">
              <h4>Doing</h4>
              {cardsData.map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </div>
            <div className="list">
              <h4>To Do</h4>
              {cardsData.map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default TasksPage;
