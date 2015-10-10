/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });

         it('have url defined', function(){
             allFeeds.forEach(function(feed){
                 expect(feed.url).toBeDefined();
                 expect(feed.url.length).toBeGreaterThan(0);
             })
         });

         it('have url begin with "http://"', function(){
             allFeeds.forEach(function(feed){
                 expect(feed.url).toMatch(/http:\/\//);
             })
         })

         it('have name defined', function(){
             allFeeds.forEach(function(feed){
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).toBeGreaterThan(0);
             })
         });
    });

    describe('The menu', function(){
        var hidden;

         it('is hidden by default', function(){
             hidden = $('.menu-hidden');
             expect(hidden.length).toEqual(1);
         });

          it('toggles visibility when clicked', function(){
              var menuIcon = $('.menu-icon-link');
              //click menu to show it
              menuIcon.click();
              hidden = $('.menu-hidden');
              expect(hidden.length).toEqual(0);
              //click menu again to hide it
              menuIcon.click();
              hidden = $('.menu-hidden');
              expect(hidden.length).toEqual(1);
          });
     });

    describe('Initial Entries', function(){

        beforeEach(function(done){
            //loads feed "1" since by default "0" is loaded from app.js
            loadFeed(1,done);
        });

         it('has at least 1 entry after loadFeed runs', function(done){
             var feed = ('.feed');
             expect(feed.length).toBeGreaterThan(1);
             done();
         });
     });

    describe('News Feed Selection', function(){
        var oldContent;

        beforeEach(function(done){
            oldContent = $('.feed').html();
            //loads feed "2" so it's different from previous feed
            loadFeed(2,done);
        });

         it('changes content when loaded', function(done){
             var newContent = $('.feed').html();
             expect(oldContent).not.toBe(newContent);
             done();
         });
    });

    describe('News Feed Behavior', function(){
        it('hides visited news links', function(){
            var visitCount = $('.visited').length;
            //var firstArticle = $('.feed').first().click();
            $('.entry-link:first').click();
            var newVisitCount = $('.visited').length;
            expect(visitCount).not.toEqual(newVisitCount);
        });
    })
}());
