# cookie-clicker-clone
An idle incremental clicker game

README last updated at 8:16PM on Dec 12 2022

The way my idle incrementer game currently works:

// Surface level - How it works currently
You can click the "Click" button and it will +1 your "Clicks:" count. It goes up by 1.
You can buy an autoclicker for 5 clicks. It subtracts from your total. This will increment your click count by 1 per 500 milliseconds from then on. You can keep buying them to keep getting more of the +1 incrementing effect. If you have 23 autoclickers, you will have 23 automatic clicks added to your click count per 500 milliseconds. 
That's pretty much it.

// Surface level description of features I would like to add
-More autoclickers
-I want the buy options to line up on the side in rows, like in Cookie Clicker. They should all have their own incrementing effect, which will add to the meta incrementer.
-The meta incrementer: every 500 milliseconds the program will increment the clicks heap by a certain amount. This amount will depend on how many upgrades have been purchased. Actually, I think the meta incrementer already exists, it's autoClickerAmount. So I could set up multiple different names like Factory or Warehouse that are types of autoclicker that can be purchased and that can add to the autoclicker amount. Inside of the buy process for the existing one, it says "autoClickerAmount += 1;". It'll be like that. If a Factory can buy a million clicks, we will use "autoClickerAmount += 1000000;"
-Since I may turn this into a cookie clicker clone initially, I will want three div areas. One for the giant cookie to sit in that we can click, one for the buildings (like tiny tower) with visual representations of what we buy, like little Monopoly figures that you get every time you buy. On the last div, which is on the right, we have rows of buy options.
-If we can't buy things, they're grayed out.  This can be done by checking our cookie count and seeing if it is equal or greater than the amount of cookies that the purchase price is. The graying effect itself is CSS.
Every one of the autoclickers should have its own number of times we've bought it, not just the overall autoclickers counter.

// Non-surface-level of how the program works currently
I won't cover CSS.
There are currently two header-1 h1 elements that represent the counters. They say "Clicks:" and "Autoclickers". There are also two buttons, click-btn and 


// Low-level non-surface-level description of these features I want to add
For column 3, put everything in a div tag, probably with flexbox. Add div tags inside of that for all of the upgrades, which will be rectangle rows. Each rectangle on top of the other. Put text and variables inside of each of these square divs, evoking what it is you're buying. If not available due to lack of funds, use a conditional in the "click" event listener to bar access.



