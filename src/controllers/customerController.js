const controller = {}

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM customers', (err, customers) => {
			if(err) 
				res.json(err)
			// console.log(customers)
			res.render('customers', {
				data: customers
			})
		})
	})
}

controller.save = (req, res) => {
	const data = req.body
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO customers SET ?', [data], (err, customer) => {
			res.redirect('/')
		})
	})
}

controller.edit = (req, res) => {
	const { id } = req.params
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM customers WHERE id = ?', [id], (err, customer) => {
			res.render('customer-edit', {
				data: customer[0]
			})
		})
	})
}

controller.update = (req, res) => {
	const { id } = req.params
	const newCustomer = req.body
	req.getConnection((err, conn) => {
		conn.query('UPDATE customers SET ? WHERE id = ?', [newCustomer, id], (err, customer) => {
			res.redirect('/')
		})
	})
}

controller.delete = (req, res) => {
	const { id } = req.params
	req.getConnection((err, conn) => {
		conn.query('DELETE FROM customers WHERE id = ?', [id], (err, customer) => {
			res.redirect('/')
		})
		conn.query('ALTER TABLE customers AUTO_INCREMENT = 1')
	})
}

module.exports = controller
