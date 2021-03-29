import random

import mkstowe.variegata
from mkstowe.variegata.model import keyword_extraction
import csv
from sklearn.metrics.pairwise import cosine_similarity


def generate_story(num_nodes):
    model = mkstowe.variegata.models.get_model()
    db = mkstowe.variegata.models.get_db().cursor()
    vectorizer = mkstowe.variegata.models.get_vectorizer()
    X = mkstowe.variegata.models.get_transformed_vectorizer()
    df = mkstowe.variegata.models.get_dataframe()

    story_events = []

    db.execute('SELECT story_num FROM events')
    nodes = db.fetchall()

    first_node = random.choice(nodes)
    db.execute('SELECT text FROM events WHERE story_num = ?', (first_node[0],))
    curr_node = keyword_extraction.extract_keywords(db.fetchone()[0], 1)

    query_vec = vectorizer.transform([curr_node[0]])
    results = cosine_similarity(X, query_vec).reshape((-1,))

    for i in results.argsort()[-1:][::-1]:
        story_events.append(curr_node[0] + ' ' + df.iloc[i, 1])

    for i in range(num_nodes - 1):
        curr_node = random.choice(model.most_similar(curr_node)[:5])[0]
        query_vec = vectorizer.transform([curr_node])
        results = cosine_similarity(X, query_vec).reshape((-1,))

        for j in results.argsort()[-1:][::-1]:
            story_events.append(curr_node + ' ' + df.iloc[j, 1])

    return story_events
