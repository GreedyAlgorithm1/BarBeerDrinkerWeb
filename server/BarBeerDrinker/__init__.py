from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database


app = Flask(__name__)

@app.route('/api/bar', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())


@app.route("/api/bar/<bar_id>", methods=["GET"])
def find_bar(bar_id):
    try:
        if bar_id is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(bar_id)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


#fix in database.py
@app.route("/api/beers_cheaper_than", methods=["POST"])
def find_beers_cheaper_than():
    body = json.loads(request.data)
    max_price = body['maxPrice']
    return jsonify(database.filter_beers(max_price))

#fix in database.py
@app.route('/api/menu/<bar_id>', methods=['GET'])
def get_menu(bar_id):
    try:
        if bar_id is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(bar_id)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_bar_menu(bar_id))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/menu2/<bar_id>', methods=['GET'])
def get_food_menu(bar_id):
    try:
        if bar_id is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(bar_id)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_bar_items_menu(bar_id))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beer", methods=["GET"])
def get_beers():
    try:
        return jsonify(database.get_beers())
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beer-manufacturer", methods=["GET"])
def get_beer_manf():
    try:
        return jsonify(database.get_beer_manf(None))
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beer-manufacturer/<beer>", methods=["GET"])
def get_manufacturers_making(beer):
    try:
        return jsonify(database.get_beer_manf(beer))
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/likes", methods=["GET"])
def get_likes():
    try:
        drinker = request.args.get("drinker")
        if drinker is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_likes(drinker))
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/drinkersOrders/<drinker_id>")
def get_beers_ordered(drinker_id):
    try:
        if drinker_id is None:
            raise ValueError("Drinker ID is not specified")
        return jsonify(database.get_beers_ordered(drinker_id))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/drinker", methods=["GET"])
def get_drinkers():
    try:
        return jsonify(database.get_drinkers())
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/drinker/<drinker_id>", methods=["GET"])
def get_drinker(drinker_id):
    try:
        if drinker_id is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_drinker_info(drinker_id))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/drinkerNameById/<drinker_id>", methods=["GET"])
def get_drinker_name_by_id(drinker_id):
    try:
        if drinker_id is None:
            raise ValueError("Drinker Id not given.")
        return jsonify(database.get_drinker_name_by_id(drinker_id))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/bars-selling/<beer>', methods=['GET'])
def find_bars_selling(beer):
    try:
        if beer is None:
            raise ValueError('Beer not specified')
        return jsonify(database.get_bars_selling(beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/frequents-data', methods=['GET'])
def get_bar_frequent_counts():
    try:
        return jsonify(database.get_bar_frequent_counts())
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/bills/<drinker_id>', methods=["GET"])
def getbill_from_drinker_(drinker_id):
    try:
        if drinker_id is None:
            raise ValueError("Drinker ID is not specified")
        return jsonify(database.get_bills_from_drinker(drinker_id))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/transactions/<drinker_id>', methods=["GET"])
def get_transactions_from_drinker(drinker_id):
    try:
        if drinker_id is None:
            raise ValueError("Drinker ID is not specified")
        return jsonify(database.get_transactions_from_drinker(drinker_id))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        print("Wtf")
        return make_response(str(e), 500)