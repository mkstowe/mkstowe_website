import random
import mkstowe.variegata


def generate_story(num_nodes):
    db = mkstowe.variegata.database.get_db()
    story_events = []

    nodes = db.execute('SELECT * FROM events WHERE event_idx = 0').fetchall()
    first_node = random.choice(nodes)
    story_events.append(first_node['text'])
    curr_node = first_node['story_num'] + "_0"

    for i in range(num_nodes - 1):
        curr_node = random.choice(mkstowe.app.config["VARIEGATA_MODEL"].most_similar(curr_node)[:5])[0]
        split_node = curr_node.split("_")
        curr_text = db.execute(
            'SELECT text FROM events WHERE (story_num = ? AND event_idx = ?)',
            (split_node[0], int(split_node[1]),)
        ).fetchone()['text']
        story_events.append(curr_text)

    return story_events
