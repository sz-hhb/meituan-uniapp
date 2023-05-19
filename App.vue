<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	page,
	body {
		height: 100%;
	}

	scroll-view ::-webkit-scrollbar {
		display: none !important;
	}

	.uni-data-checklist {
		.checklist-group .checklist-box.is--tag {
			flex: 1;
			height: 40rpx !important;
			border: 0 !important;
			background-color: #f9f9f9;
		}

		.checklist-group .checklist-box .checklist-content {
			justify-content: center !important;
		}
	}
</style>