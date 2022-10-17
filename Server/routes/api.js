/*module.exports = (app) => {
    app.use('/api/user', require('./route/UserRoutes'));
    app.use('/api/tasks', require('./route/TaskRoutes'));
  
    // TO HANDLE ROUTE WHICH ARE NOT AVAIABLE
    app.use('/:any', (req, res) => {
      res.status(400).json({ status: false, msg: 'Route not available :(' })
    })
  
    // HANDLING ERROR BY USING ERROR_MIDDLEWARE
    app.use(require('../middleware/error'));
  }*/