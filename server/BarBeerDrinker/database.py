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
                          ORDER BY a.price;')
        beer = beer.strip()
        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results


def get_bars_selling_beers():
        with engine.connect() as con:
                query = sql.text('SELECT id, bar, beer, price \
                                        FROM sellsBeer \
                                        ORDER BY id ASC;')
                rs = con.execute(query)
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                        results[i]['price'] = float(results[i]['price'])
                return results

def get_bars_selling_items():
        with engine.connect() as con:
                query = sql.text('SELECT id, bar, item, price \
                                        FROM sellsItem \
                                        ORDER BY id ASC;')
                rs = con.execute(query)
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                        results[i]['price'] = float(results[i]['price'])
                return results


def get_bar_frequent_counts():
        with engine.connect() as con:
                query = sql.text('SELECT barid, bar, count(*) as frequentCount \
                                        FROM frequents \
                                        GROUP BY bar;')
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
        query = sql.text('SELECT beer FROM likes WHERE name = :name;')
        rs = con.execute(query, name=drinker_name)
        return [row['name'] for row in rs]


def drinkers_liking_beers():
        with engine.connect() as con:
                query = sql.text('SELECT id, drinker, beer \
                                        FROM likes \
                                        ORDER BY id ASC;')
                rs = con.execute(query)
                return [dict(row) for row in rs]


def drinkers_frequenting_bars():
        with engine.connect() as con:
                query = sql.text('SELECT drinkerId, drinker, barId, bar, State AS state \
                                        from frequents \
                                        Order By drinkerId ASC;')
                rs = con.execute(query)
                return [dict(row) for row in rs]


def get_drinker_info(drinker_id):
    with engine.connect() as con:
        query = sql.text('SELECT * FROM drinkers WHERE id = :drinker_id;')
        rs = con.execute(query, drinker_id=drinker_id)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def add_query(sqlQuery):
    with engine.connect() as con:
        query = sql.text(sqlQuery)
        rs = con.execute(query)
        return [dict(row) for row in rs]

def check_query(queryNo):

    with engine.connect() as con:
        if queryNo is '1':

            query = sql.text('SELECT COUNT(*) as bool\
                                FROM bills b\
                                WHERE b.billId NOT IN \
                                    (SELECT  b1.billId\
                                      FROM bills b1 JOIN bars b2 ON b1.barId = b2.id\
                                      WHERE b1.timeIssued >= b2.open AND b1.timeIssued <= b2.close);')

            rs=con.execute(query)
            result = rs.first()
            if result is None:
                return None
            if result['bool'] == 0:
                return "Logic 1 verified"
            else:
                return "An error has occurred."

        if queryNo is '2':
            query = sql.text('SELECT COUNT(*) as bool\
                                FROM drinkers d JOIN frequents f ON d.Id = f.drinkerId\
                                WHERE d.name = f.drinker AND d.State != f.State;')

            rs = con.execute(query)
            result = rs.first()
            if result is None:
                return None
            if result['bool'] == 0:
                return "Logic 2 verified"
            else:
                return "An error has occurred."

        if queryNo is '3':
            query = sql.text('SELECT count(*) as bool\
                                from sellsBeer s, sellsBeer s1\
                                where s.id = s1.id and s.price > s1.price and \
                                not exists(select *\
                                            from sellsBeer s2, sellsBeer s3\
                                            where s2.id = s3.id and s2.beer <> s3.beer \
                                            and s2.beer = s.beer and s3.beer = s1.beer\
                                            and s2.price <= s3.price);')
            rs=con.execute(query)
            result = rs.first()
            if result is None:
                return None
            if result['bool'] == 0:
                return "An error has occurred"
            else:
                return "Logic 3 Verfied."

    
def get_drinker_name_by_id(drinker_id):
    with engine.connect() as con:
        query = sql.text('SELECT name FROM drinkers WHERE id = :drinker_id;')
        rs = con.execute(query, drinker_id=drinker_id)
        result = rs.first()
        if result is None:
            return None
        return result['name']


def get_beers_ordered(drinker_id):
    with engine.connect() as con:
        query = sql.text('SELECT be.id, item AS beer, count(*) AS beerCount\
                            FROM bills b JOIN beers be ON b.item = be.name \
                            WHERE drinkerId = :drinker_id AND item NOT IN (SELECT item \
							FROM items) GROUP BY item;')
        rs = con.execute(query, drinker_id=drinker_id)
        results = [dict(row) for row in rs]
        return results


#TRANSACTION SECTION
def get_transactions():
        with engine.connect() as con:
                query = sql.text('SELECT tid, barId, drinkerId, subtotal, tax, tip, total \
                                        FROM transactions;')
                rs = con.execute(query)
                return [dict(row) for row in rs]


def get_transactions_from_drinker(drinker_id):
    with engine.connect() as con:
        query = sql.text('SELECT t1.tid, t1.barId, t1.drinkerId, t1.subtotal, t1.tax, t1.tip, t1.total \
                            FROM transactions t1 JOIN (SELECT id, name FROM drinkers) as d \
                            ON t1.drinkerId = :drinker_id \
                            WHERE t1.drinkerId = d.id;')
        rs = con.execute(query, drinker_id=drinker_id)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['subtotal'] = float(results[i]['subtotal'])
            results[i]['tax'] = float(results[i]['tax'])
            results[i]['tip'] = float(results[i]['tip'])
            results[i]['total'] = float(results[i]['total'])
        return results


#BILLS SECTION
def get_bills():
        with engine.connect() as con:
                query = sql.text('SELECT billId, barId, drinkerId, timeIssued, item, quantity, price \
                                        FROM bills;')
                rs = con.execute(query)
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                        results[i]['price'] = float(results[i]['price'])
                return results                


def get_bills_from_drinker(drinker_id):
    with engine.connect() as con:
        query = sql.text('SELECT b.billId, b.barId, b.drinkerId, b.timeIssued, b.item, b.quantity, b.price \
                            FROM bills b JOIN (SELECT id, name FROM drinkers) as d \
                            ON b.drinkerId = :drinker_id \
                            WHERE b.drinkerId = d.id')
        rs = con.execute(query, drinker_id=drinker_id)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results
