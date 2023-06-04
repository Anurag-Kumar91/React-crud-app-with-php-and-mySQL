<?php
	/**
	* Database Connection
	*/
	class DbConnect {
		private $server = 'localhost:3307';
		private $dbname = 'react-crud';
		private $user = 'root';
		private $password = '';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->password);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
        
	}
?>