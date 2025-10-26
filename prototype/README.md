# Healthcare Spending Visualization - Prototype

## 🚀 Quick Start

**Open the visualization:**
```bash
open index.html
```

Or simply double-click `index.html` in Finder.

## 📊 What's Included

### Current Features:
- ✅ Interactive Sankey diagram
- ✅ Shows 9 major spending categories
- ✅ Flow widths proportional to spending
- ✅ Hover tooltips with details
- ✅ Clean, modern UI
- ✅ Responsive design
- ✅ Summary statistics

### Data Coverage:
- **87% of total spending** ($4.0T of $4.9T)
- **9 categories** with full data
- Hospital Care (31%)
- Physician Services (20%)
- Prescription Drugs (9.2%)
- Plus 6 more categories

## 🎨 Features

### Interactive Elements:
1. **Hover** - See exact amounts and percentages
2. **Visual Flow** - Width represents spending amount
3. **Color Coded** - Each category has unique color
4. **Statistics** - Key metrics at the top

### Design:
- Purple gradient theme
- Clean, professional layout
- Desktop-optimized
- No external dependencies except Plotly CDN

## 🔧 Technical Details

**Tech Stack:**
- Pure HTML/CSS/JavaScript
- Plotly.js for Sankey diagram
- No build process needed
- Works offline (after initial CDN load)

**File Size:** ~12KB (excluding Plotly CDN)

**Browser Support:**
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## 📝 Next Steps

### To Add:
1. **Click-to-isolate** - Click flows to highlight
2. **Payer breakdown** - Show who pays for each category
3. **Level 2 subcategories** - Drill down into details
4. **Data from JSON** - Load from actual data file
5. **Export features** - Download as image/PDF

### Future Enhancements:
- Add missing 4 categories ($627B)
- Multiple view options (payer-first, category-first)
- Year-over-year comparisons
- State-by-state breakdowns
- Mobile optimization

## 🧪 Testing the Prototype

### What to Test:
1. **Does the flow make sense?** - Follow money from total to categories
2. **Is it intuitive?** - Can you understand it without instructions?
3. **Do you want to interact more?** - What features are missing?
4. **Is click-to-isolate valuable?** - Would highlighting help?

### Questions to Answer:
- Does Sankey work better than a tree view?
- Is the layout clear?
- Do you want to see payer breakdowns?
- Should we add subcategory drill-down?

## 📊 Data Source

Currently using **embedded data** from `healthcare_spends_research.json`

**To connect to live data:**
1. Uncomment the fetch() in the script
2. Ensure JSON file is in correct location
3. Serve via local server (not file://)

## 💡 Tips

**For best experience:**
- View on desktop (1400px+ width recommended)
- Use modern browser
- Zoom in/out to see details

**To modify:**
- Edit colors: Change the `colors` array in script
- Adjust layout: Modify CSS in `<style>` tag
- Change data: Update the `data` object

## 🎯 Success Criteria

This prototype validates:
- ✅ Sankey is right visualization choice
- ✅ Category-first perspective works
- ✅ Data structure supports flows
- ✅ User can understand spending at a glance

## 📞 Feedback

After reviewing, consider:
- What works well?
- What's confusing?
- What features are essential?
- Should we proceed with this approach?

---

**Status:** Proof of Concept  
**Data:** 87% Complete  
**Next:** Gather feedback, iterate, add interactivity
