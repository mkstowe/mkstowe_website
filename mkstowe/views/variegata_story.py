"""
Variegata story view.
URLs include:
/projects/variegata/story/
"""
import flask
import mkstowe
from mkstowe.variegata.generator import generate_story


@mkstowe.app.route('/projects/variegata/story/', methods=['GET', 'POST'])
def story():
    """Display /story/ route."""
    context = {"events": generate_story.generate_story(20)}
    return flask.render_template("variegata_story.html", **context)
