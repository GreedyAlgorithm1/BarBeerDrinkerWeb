from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config


engine = create_engine(config.database_uri)

def get_bars():
	with engine.connect() as con:
		rs = con.execute("SELECT id, name, state, open, close, license, phone, addr FROM bars;")
		return [dict(row) for row in rs]

def find_bar(bar_Id):
	with engine.connect() as con:
		query = sql.text( "SELECT id, name, state, open, close, license, phone, address FROM bars WHERE id = :bar_Id;")

		rs = con.execute(query, id = bar_Id)
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

#gets beer  from a particular bar using its Id
#write this in the __init__.py file
def get_bar_beer_menu(bar_Id):
    with engine.connect() as con:
        query = sql.text(
            'SELECT Name, Price FROM sellsBeers WHERE Id = :bar_Id;')
        rs = con.execute(query, Id=bar_Id)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['Price'] = float(results[i]['Price'])
        return results

#gets food/non-beer items from a particular bar using its Id
#write this in the __init__.py file
def get_bar_items_menu(bar_Id):
    with engine.connect() as con:
        query = sql.text(
            'SELECT Name, Price FROM sellsItems WHERE Id = :bar_Id;'
            )
        rs = con.execute(query, bar_Id = bar_Id)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['Price'] = float(results[i]['Price'])
        return results

"""
def get_bars_selling(beer):
    with engine.connect() as con:
        query = sql.text('SELECT a.bar, a.price, b.customers \
                FROM sells AS a \
                JOIN (SELECT bar, count(*) AS customers FROM frequents GROUP BY bar) as b \
                ON a.bar = b.bar \
                WHERE a.beer = :beer \
                ORDER BY a.price; \
            ')
        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results


def get_bar_frequent_counts():
    with engine.connect() as con:
        query = sql.text('SELECT bar, count(*) as frequentCount \
                FROM frequents \
                GROUP BY bar; \
            ')
        rs = con.execute(query)
        results = [dict(row) for row in rs]
        return results


def get_bar_cities():
    with engine.connect() as con:
        rs = con.execute('SELECT DISTINCT city FROM bars;')
        return [row['city'] for row in rs]

"""

#BEER SECTION
def get_beers():
    """Gets a list of beer names from the beers table."""

    with engine.connect() as con:
        rs = con.execute('SELECT name, id, manf FROM beers;')
        return [dict(row) for row in rs]


def get_beer_manf(beer):
    with engine.connect() as con:
        if beer is None:
            rs = con.execute('SELECT DISTINCT manf FROM beers;')
            return [row['manf'] for row in rs]

        query = sql.text('SELECT manf FROM beers WHERE name = :beer;')
        rs = con.execute(query, beer=beer)
        result = rs.first()
        if result is None:
            return None
        return result['manf']

#ADD TO INIT.PY
#given beer- query bars were beer is sold the most
#def get_most_popular_bar(beer_name):



#DRINKER SECTION
def get_drinkers():
    with engine.connect() as con:
        rs = con.execute('SELECT id, name, state, phone, address FROM drinkers;')
        return [dict(row) for row in rs]


def get_likes(drinker_name):
    """Gets a list of beers liked by the drinker provided."""

    with engine.connect() as con:
        query = sql.text('SELECT beerName FROM Likes WHERE Name = :name;')
        rs = con.execute(query, Name=drinker_name)
        return [row['beerName'] for row in rs]


def get_drinker_info(drinker_name):
    with engine.connect() as con:
        query = sql.text('SELECT * FROM drinkers WHERE name = :name;')
        rs = con.execute(query, name=drinker_name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)