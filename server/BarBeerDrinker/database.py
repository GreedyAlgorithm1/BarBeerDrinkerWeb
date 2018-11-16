from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config


engine = create_engine(config.database_uri)

def get_bars():
	with engine.connect() as con:
		rs = con.execute("SELECT id, name, state, open, close, license, phone, addr FROM bars;")
		return [dict(row) for row in rs]

def find_bar(id):
	with engine.connect() as con:
		query = sql.text( "SELECT id, name, state, open, close, license, phone, addr FROM bars WHERE id = :id;")

		rs = con.execute(query, id = id)
		result = rs.first()
		if result is None:
			return None
		return dict(result)

def filter_beers(max_price):
	with engine.connect() as con:
		query = sql.text("SELECT * FROM sellsBeers WHERE Price < :max_price;")

		rs = con.execute(query, max_price = max_price)
		results = [dict(row) for row in rs]
		for r in results:
			r['Price'] = float(r['Price'])
		return results

#BAR SECTION

#gets full menue list from a particular bar using its id
#sub-calls get_bar_beer_menue and get_bar_items_menue also using id
#merges the two into a results list
"""
def get_bar_menu(id):
    beerResults = get_bar_beer_menu(id)
    itemsResults = get_bar_items_menu(id)
    results = beerResults + itemsResults
    return results
"""

#gets beers from a particular bar using its id
def get_bar_menu(id):
    with engine.connect() as con:
        query = sql.text(
            'SELECT a.id, a.beer, a.price, b.manf, coalesce(c.like_count, 0) as liked \
            FROM sellsBeer as a JOIN beers AS b ON a.beer = b.name \
            LEFT OUTER JOIN (SELECT beer, count(*) as like_count FROM likes GROUP BY beer) as c \
             ON a.beer = c.beer  WHERE a.id = :id; ')
        rs = con.execute(query, id=id)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results

#gets food/non-beer items from a particular bar using its Id
def get_bar_items_menu(id):
    with engine.connect() as con:
        query = sql.text(
            'SELECT item, price FROM sellsItem WHERE id = :id;'
            )
        rs = con.execute(query, id = id)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results


def get_bars_selling(beer):
    with engine.connect() as con:
        query = sql.text('SELECT a.id, a.bar, a.price, b.customers \
                          FROM sellsBeer AS a \
                          JOIN (SELECT bar, count(*) AS customers FROM frequents GROUP BY bar) as b\
                          ON a.bar = b.bar WHERE a.beer = :beer \
                          ORDER BY a.price; \
            ')
        beer = beer.strip()
        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results


def get_bar_frequent_counts():
    with engine.connect() as con:
        query = sql.text('SELECT barid, bar, count(*) as frequentCount \
                FROM frequents \
                GROUP BY bar; \
            ')
        rs = con.execute(query)
        results = [dict(row) for row in rs]
        return results


#BEER SECTION
def get_beers():
    """Gets a list of beer names from the beers table."""

    with engine.connect() as con:
        rs = con.execute('SELECT name, id, manf FROM beers;')
        return [dict(row) for row in rs]


def get_beer_manf(name):
    with engine.connect() as con:
        if name is None:
            rs = con.execute('SELECT DISTINCT manf FROM beers;')
            return [row['manf'] for row in rs]

        name = name.strip()
        query = sql.text('SELECT manf FROM beers WHERE name = :name;')
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return result['manf']


#DRINKER SECTION
def get_drinkers():
    with engine.connect() as con:
        rs = con.execute('SELECT id, name, state, phone, address FROM drinkers;')
        return [dict(row) for row in rs]


def get_likes(drinker_name):
    """Gets a list of beers liked by the drinker provided."""

    drinker_name = drinker_name.strip()
    with engine.connect() as con:
        query = sql.text('SELECT beerName FROM Likes WHERE Name = :name;')
        rs = con.execute(query, Name=drinker_name)
        return [row['beerName'] for row in rs]


def get_drinker_info(drinker_id):
    with engine.connect() as con:
        query = sql.text('SELECT * FROM drinkers WHERE id = :drinker_id;')
        rs = con.execute(query, drinker_id=drinker_id)
        result = rs.first()
        if result is None:
            return None
        return dict(result)